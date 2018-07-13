import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { NestedPostsComponent } from './nested-posts/nested-posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        MatInputModule
    ],
    declarations: [
        AppComponent,
        SidebarComponent,
        HomeComponent,
        AboutComponent,
        PostsComponent,
        NestedPostsComponent,
        NotFoundComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }