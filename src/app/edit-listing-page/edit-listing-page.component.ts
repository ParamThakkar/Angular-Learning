import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
  listing : Listing | undefined;
  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((obs)=>{
      const id = obs.get('id')
      this.listing = fakeMyListings.find(listing => listing.id ===id)
    })
  }

  onSubmit():void{
    alert(`Saving changes to the listing...`)
    this.router.navigateByUrl('/my-listings');
  }

}
