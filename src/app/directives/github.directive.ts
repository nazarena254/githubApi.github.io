import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appGithub]'
})
export class GithubDirective {

  constructor( private elem:ElementRef) { 
    elem.nativeElement.style.backgroundColor='#6F6D81'
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('#24a0ed')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('#6F6D81')
  }
 
  private highlight(color:string){
    this.elem.nativeElement.style.backgroundColor=color
  }

}
