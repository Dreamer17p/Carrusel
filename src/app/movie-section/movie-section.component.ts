import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ListMoviesService } from './list-movies.service';
import { SwiperComponent} from "swiper/angular";
import { Target } from './target';
import { faChevronRight, faStar, faArrowUpRightFromSquare, faPlay, faPlus} from '@fortawesome/free-solid-svg-icons';
import SwiperCore,  {Navigation, Pagination} from 'swiper';

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieSectionComponent {

  faChevronRight = faChevronRight;
  faStar = faStar;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faPlay = faPlay;
  faPlus = faPlus;

  constructor(private listMoviesService: ListMoviesService) {}

  targetMovies: Target[] = [];
  selectedMovie?: Target;

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movi: Target): void {
    this.selectedMovie = movi;
  }

  getMovies(): void {
    this.listMoviesService.getMovies()
        .subscribe(targetMovies => this.targetMovies = targetMovies);
  }

  @ViewChild('newSwiper') newSwiper: any;

  ngAfterViewInit(): void {
    console.log(this.newSwiper.swiperRef);
    //Swiper instance will be displayed in console
  }

@ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext(){
    this.newSwiper.swiperRef.slideNext(400);
  }
  slidePrev(){
    this.newSwiper.swiperRef.slidePrev(400);
  }
}
