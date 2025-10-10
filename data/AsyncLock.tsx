export default class AsyncLock {
    private _mutex: Promise<void> = Promise.resolve()

    async acquire(): Promise<() => void> {
        let release!: () => void
        const p = new Promise<void>((res) => { release = res })
        const previous = this._mutex
        // chain so the next locker waits for the previous
        this._mutex = previous.then(() => p)
        // wait for the previous to finish before returning the release
        await previous
        return release
    }

    // Convenience helper that runs the provided function while holding the lock
    async runExclusive<T>(fn: () => Promise<T> | T): Promise<T> {
        const release = await this.acquire()
        try {
            return await fn()
        } finally {
            try { release() } catch {}
        }
    }
}