import { Routes } from '@angular/router';

export const toolsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../components/tools/tools.component').then(m => m.ToolsComponent),
  },
  {
    path: 'simple_ai_tools/:toolId',
    loadComponent: () => import('../components/tools/simple-ai-tools/simple-ai-tool/simple-ai-tool.component').then(m => m.SimpleAiToolComponent),
  },
  {
    path: 'simple_ai_tools',
    loadComponent: () => import('../components/tools/simple-ai-tools/simple-ai-tools.component').then(m => m.SimpleAiToolsComponent),
  },
  {
    path: 'simple_tools/:toolId',
    loadComponent: () => import('../components/tools/simple-tools/simple-tool/simple-tool.component').then(m => m.SimpleToolComponent),
  },
  {
    path: 'simple_tools',
    loadComponent: () => import('../components/tools/simple-tools/simple-tools.component').then(m => m.SimpleToolsComponent),
  },
];
