import type { PageProps } from 'waku/router';

export default function ProjectPage ({name}: PageProps<'/project/[name]'>) {
    return(
        <a>If all goes right you should see this and the project name: {name}</a>
    )
}

export const getConfig = async () => {
    return {
      render: 'dynamic',
    } as const;
  }