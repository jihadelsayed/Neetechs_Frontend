import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TutorialUtilsService {
  groupCategoriesByType(categories: any[]): { [key: string]: any[] } {
    return categories.reduce((groups: any, category: any) => {
      const type = category.type;
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(category);
      return groups;
    }, {});
  }

  getTypes(groupedCategories: { [key: string]: any[] }): string[] {
    return Object.keys(groupedCategories || {});
  }
}
