import { UtilsService } from '@/core/utils.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-video-popap',
  templateUrl: './video-popap.component.html',
  styleUrls: ['./video-popap.component.scss']
})
export class VideoPopapComponent {

  constructor(public utilsService: UtilsService){}
}
