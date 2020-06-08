import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[togglePassword]'
})
export class TogglePasswordVisibilityDirective {
  private password = true;

  constructor (private el : ElementRef) {}

  ngOnInit() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.classList.add("fa");
    span.classList.add("fa-eye");
    span.style.top = '4px';
    span.style.position = 'absolute';
    span.style.cursor = 'pointer';
    span.style.right = '0px';
    span.style.marginRight = '10px';
    span.style.fontSize = '32px';
    span.style.color = '#A8A8A8';
    span.addEventListener('click', () => {
      this.togglePassword(span);
    });
    parent.appendChild(span);
  }
    

  togglePassword(span : HTMLElement){
    this.password = !this.password;
    const inputType = this.password ? 'password' : 'text';
    this.el.nativeElement.setAttribute('type', inputType);
    if (this.password) {
      span.classList.remove('fa-eye-slash');
      span.classList.add('fa-eye');
    } else {
      span.classList.remove('fa-eye');
      span.classList.add('fa-eye-slash');
    }
  }
}