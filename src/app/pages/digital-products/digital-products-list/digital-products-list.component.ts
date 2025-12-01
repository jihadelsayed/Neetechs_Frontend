import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DigitalProductService } from '../../../services/digital-product.service';
import { DigitalProduct } from '../../../models/digital-product.model';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-digital-products-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './digital-products-list.component.html',
  styleUrls: ['./digital-products-list.component.scss'],
})
export class DigitalProductsListComponent implements OnInit {
  digitalProducts$!: Observable<DigitalProduct[]>;

  constructor(private digitalProductService: DigitalProductService) {}

  ngOnInit(): void {
    this.digitalProducts$ = this.digitalProductService.getAll();
  }
}
