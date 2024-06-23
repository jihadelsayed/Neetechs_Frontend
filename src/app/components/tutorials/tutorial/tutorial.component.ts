import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialService } from './tutorial.service';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [CommonModule,HttpClientModule ],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss',
  providers: [TutorialService]

})
export class TutorialComponent {
  lesson: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('categoriesId');
      const lessonId = params.get('lessonId');
      // Fetch lesson data based on the categoryId and lessonId
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

      const category = categories.find(cat => cat.id === categoryId);
      this.lesson = category ? category.lessons.find(les => les.id === lessonId) : null;
    });
  }
}
