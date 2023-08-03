import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images=[
    {
      title: 'RS 6 Avant',
      overview: 'So this is the RS6 Avant. A big-engined version of the A6 Avant, all-wheel drive, auto paired with a 4.0-litre V8 instead.',
      url: 'https://images.prismic.io/carwow/3c86165c-8cdb-4782-8023-3c94e4794be3_31964-A226360large.jpg?fit=crop&q=60&w=1125&cs=tinysrgb&auto=format'
    },

    {
      title: '911 GT3 RS',
      overview: 'The stripped-out, track-focussed Porsche 911 GT3 RS is back. This new 992-generation model packs a plethora of motorsport-inspired upgrades, including aerodynamic tweaks borrowed from Formula 1, new suspension components, chassis mods and a more powerful naturally aspirated engine.',
      url: 'https://carwow-uk-wp-3.imgix.net/911-gt3-rs-front-lead-1-1.jpg?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600'
    },

    {
      title: 'Chiron',
      overview: 'It will accelerate from 0-62mph in less than 2.5 seconds, 0-124mph in less than 6.5 and 0-186mph in under 13.6. Then there’s the top speed, which Bugatti has limited to 261mph on the standard Chiron - a token 3mph more than the Veyron Super Sport - but raised to 273mph on the £2.6m Chiron Super Sport.',
      url: 'https://www.topgear.com/sites/default/files/2021/11/_Z3A7768.jpg?w=1784&h=1004'
    },

    {
      title: 'Quattro S1',
      overview: 'The Audi Sport Quattro S1 E2 was introduced at the end of 1985 as an update to the Audi Sport Quattro S1. The car featured an inline five-cylinder engine that displaced 2,110 cc (128.8 cu in) from a bore and stroke of 79.5 mm × 85.0 mm (3.13 in × 3.35 in) and generated an officially quoted power output figure of 480 PS (353 kW; 473 hp).',
      url: 'https://images.unsplash.com/photo-1662973948934-b5495fe15128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },

    {
      title: 'La Ferrari',
      overview: 'The Ferrari LaFerrari is the apogee of Ferrari’s current roadcar programme: a carbon, two-seat hypercar that melds a 6.3-litre Ferrari V12 with a KERS-esque battery pack and electric motor to give 950bhp and 663lb ft of torque.',
      url: 'https://www.topgear.com/sites/default/files/cars-car/carousel/2015/02/buyers_guide_-_laf_-_front.jpg?w=1784&h=1004'
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }  
}
