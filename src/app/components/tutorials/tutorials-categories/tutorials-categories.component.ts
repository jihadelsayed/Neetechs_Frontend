import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorials-categories',
  standalone: true,
  imports: [],
  templateUrl: './tutorials-categories.component.html',
  styleUrl: './tutorials-categories.component.scss'
})
export class TutorialsCategoriesComponent {
  category: any;
  lessons: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('categoriesId');
      // Fetch category data based on the id
      // This is where you'd typically make a service call
      // For demo purposes, we use static data

      const categories = [
        {
          id: "1",
          name: "Python",
          date: "June 23, 2024",
          href: "/tutorials/1",
          image: "https://i.imgur.com/6NOQqPd.png",
          lessons: [
            { id: "1", title: "Lesson 1", description: "Introduction to Python" },
            { id: "2", title: "Lesson 2", description: "Advanced Python" }
          ]
        },
        // Add other categories here
      ];

      this.category = categories.find(cat => cat.id === id);
      this.lessons = this.category ? this.category.lessons : [];
    });
  }
}
