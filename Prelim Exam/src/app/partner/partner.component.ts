import { Component } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent {
  staff = [ 
    { company: 'PopMart', series: 'The Other One', names : 'Ghost' },   
    { company: 'PopMart', series: 'Little Mischief', names : 'Manacle' },   
    { company: 'PopMart', series: 'Reshape', names : 'Fading' },   
    { company: 'PopMart', series: 'The Other One', names : 'Fox' },   
    { company: 'PopMart', series: 'Mime', names : 'Drifter' },   
    { company: 'PopMart', series: 'Little Mischief', names : 'Ragpicker' },   
    { company: 'PopMart', series: 'The Other One', names : 'Amnesia' },   
    { company: 'PopMart', series: 'City of Mercy', names : 'Healer' },   
    { company: 'PopMart', series: 'Mime', names : 'Poem' },   
    ];
}
