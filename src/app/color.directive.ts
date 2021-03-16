import { Input, OnInit, Directive, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit{
    @Input('appColor') public couleurs:{clr:string,bgclr:string};

    @HostListener('mouseenter', ['$event'])
    onEnter( e: MouseEvent ) {
      console.log(e,this.el);
      console.log('------------'+this.couleurs);
      this.el.nativeElement.style.color = this.couleurs.clr;
      this.el.nativeElement.style.backgroundColor = this.couleurs.bgclr;
    }

    @HostListener('mouseleave', ['$event'])
    onLeave( e: MouseEvent ) {
      console.log(e);
      this.el.nativeElement.style.color = 'red';
      this.el.nativeElement.style.backgroundColor = 'white';
    }

    @HostListener('window:click', ['$event'])
    onClickWin( e: MouseEvent ) {
        console.log(e);
    }
    @HostBinding('class')
    private class:any;
    @HostBinding('attr.role')
    private role:any;

    constructor(private el:ElementRef<any>) {
    }
    ngOnInit() {
       //console.log(this.class);

       //this.class='test';

   }
}
