import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listings-detail-page',
  templateUrl: './listings-detail-page.component.html',
  styleUrls: ['./listings-detail-page.component.css'],
})
export class ListingsDetailPageComponent implements OnInit {
  listing : Listing | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id : string | null= ''
    this.route.paramMap.subscribe((obs) => {
      id = obs.get('id');
      this.listing = fakeListings.find(listing=> listing.id === id);
    });
  }
}
