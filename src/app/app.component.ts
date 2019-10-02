import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ToastUiImageEditorComponent } from 'ngx-tui-image-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild(ToastUiImageEditorComponent) editorComponent: ToastUiImageEditorComponent;
 
  ngAfterViewInit() {
    console.log(this.editorComponent.editorInstance);
  }
  title = 'koka';
}
