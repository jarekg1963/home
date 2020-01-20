import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {



page = {
  title: 'Home',
  subtitle: 'Welcome Home!',
  content: 'Some home content.',
  image: 'assets/bg00.jpg'
};

  constructor(private contentService: ContentService, private route: ActivatedRoute,) { }

  ngOnInit() {
    // const pageData = this.route.snapshot.data['page'];
  //  this.page = this.contentService.pages[pageData];

  }

}
