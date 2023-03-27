import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params["pid"])
    console.log(this.activatedRoute.snapshot.paramMap.get("pid"))
    console.log(this.activatedRoute.snapshot.paramMap)
  }

}
