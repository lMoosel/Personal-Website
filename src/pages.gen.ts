// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_About_getConfig } from './pages/about';
// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as File_ProjectName_getConfig } from './pages/project/[name]';
// prettier-ignore
import type { getConfig as File_TemplatesLandingpage_getConfig } from './pages/templates/landingpage';

// prettier-ignore
type Page =
| ({ path: '/about' } & GetConfigResponse<typeof File_About_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>)
| ({ path: '/project/[name]' } & GetConfigResponse<typeof File_ProjectName_getConfig>)
| { path: '/templates/dashboard'; render: 'dynamic' }
| ({ path: '/templates/landingpage' } & GetConfigResponse<typeof File_TemplatesLandingpage_getConfig>)
| { path: '/templates/siteanalytics'; render: 'dynamic' };

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
