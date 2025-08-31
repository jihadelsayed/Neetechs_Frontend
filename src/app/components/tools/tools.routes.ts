import { Routes } from '@angular/router';

export const toolsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tools.component').then(m => m.ToolsComponent),
  },

  // ==== Simple AI Tools ====
  {
    path: 'simple_ai_tools/:toolId',
    loadComponent: () =>
      import('./simple-ai-tools/simple-ai-tool/simple-ai-tool.component')
        .then(m => m.SimpleAiToolComponent),
  },
  {
    path: 'simple_ai_tools',
    loadComponent: () =>
      import('./simple-ai-tools/simple-ai-tools.component')
        .then(m => m.SimpleAiToolsComponent),
  },

  // ==== Simple Tools ====
  {
    path: 'simple_tools/:toolId',
    loadComponent: () =>
      import('./simple-tools/simple-tool/simple-tool.component')
        .then(m => m.SimpleToolComponent),
  },
  {
    path: 'simple_tools',
    loadComponent: () =>
      import('./simple-tools/simple-tools.component')
        .then(m => m.SimpleToolsComponent),
  },

  // ==== Conversion Tools ====
  {
    path: 'conversion_tools/:toolId',
    loadComponent: () =>
      import('./conversion-tools/file-or-cors-url-tool/file-or-cors-url-tool.component')
        .then(m => m.FileOrCorsUrlToolComponent),
  },
  {
    path: 'conversion_tools',
    loadComponent: () =>
      import('./conversion-tools/conversion-tools.component')
        .then(m => m.ConversionToolsComponent),
  },
];
