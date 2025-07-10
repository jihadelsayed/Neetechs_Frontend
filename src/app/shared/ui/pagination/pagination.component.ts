import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IBlogType } from '@/types/blog-type';
import { IProduct } from '@/types/product-type';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() products: IProduct[] | IBlogType[] = [];
  @Input() paginate: any = {};
  @Output() setPage: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit(): void {}
  pageSet(page: number) {
    this.setPage.emit(page); // Set Page Number
  }
}
