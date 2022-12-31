import { NamesService } from 'src/services/names/names.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class namesComponent implements OnInit {
  constructor(private NamesService: NamesService) { }
  Names: any[];

  ngOnInit(): void {
    this.NamesService.getAllNames().subscribe(
      (data: any) => {
        console.log(data)
        this.Names = data.data
      })
  }

}
