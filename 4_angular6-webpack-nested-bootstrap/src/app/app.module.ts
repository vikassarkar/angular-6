import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { NestedPostsComponent } from './nested-posts/nested-posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbdModalContent } from './utility/modal/NgbdModalContent';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        SidebarComponent,
        HomeComponent,
        AboutComponent,
        PostsComponent,
        NestedPostsComponent,
        NotFoundComponent,
        NgbdModalContent
    ],
    providers: [],
    entryComponents: [NgbdModalContent],
    bootstrap: [AppComponent]
})
export class AppModule { }