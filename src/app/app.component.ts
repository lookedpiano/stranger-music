import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stranger Music';

  songConfigs: SongConfig[] = [
    {
      title: 'chill',
      link: 'https://www.youtube.com/watch?v=7tRexHxaMqA',
      img: 'https://i.ytimg.com/vi/7tRexHxaMqA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAxD54Q7YJAJGsSAD8q2g37NCfI-g'
    },
    {
      title: 'hope',
      link: 'https://www.youtube.com/watch?v=n6pLigZESbc',
      img: 'https://i.ytimg.com/vi/n6pLigZESbc/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLByRLgd8QGkjuF9bll2PSS1C1nM8w'
    },
    {
      title: 'free',
      link: 'https://www.youtube.com/watch?v=_-tc45QaUvM',
      img: 'https://i.ytimg.com/vi/_-tc45QaUvM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBofsMRGgthyDVyWSfF02EoeIYrmg'
    },
    {
      title: 'milky way',
      link: 'https://www.youtube.com/watch?v=vSVuDrKtKbA',
      img: 'https://i.ytimg.com/vi/vSVuDrKtKbA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAt7S_lL05OapCBhFxHyEqtS-gSSQ'
    },
    {
      title: 'fun',
      link: 'https://www.youtube.com/watch?v=TZkFKXZo3D0',
      img: 'https://i.ytimg.com/vi/TZkFKXZo3D0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAJqYFpy7hWGmMl1iIz_kKkQiw9qg'
    },
    {
      title: 'vibe',
      link: 'https://www.youtube.com/watch?v=LSnG_N7Cawk',
      img: 'https://i.ytimg.com/vi/LSnG_N7Cawk/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA0BgzyKAZhprBPbimsfvFT_QKHzw'
    },
    {
      title: 'groove',
      link: 'https://www.youtube.com/watch?v=tDCryMtpi9Y',
      img: 'https://i.ytimg.com/vi/tDCryMtpi9Y/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAq7n11md5th8UAp8p8Gtalxpk-pQ'
    },
    {
      title: 'dark',
      link: 'https://www.youtube.com/watch?v=Dw137ceZMxY',
      img: 'https://i.ytimg.com/vi/Dw137ceZMxY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLApbQzAxe-sA-JoNiq5qVQYIW9s3w'
    },
    {
      title: 'hustle',
      link: 'https://www.youtube.com/watch?v=_bgwDQDzM1w',
      img: 'https://i.ytimg.com/vi/_bgwDQDzM1w/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBpk2p86CKaG92Pilt3S_YL_TBOqg'
    }
  ]

  redirectToYt(link: string) {
    window.open(link, '_blank');
  }
}

export class SongConfig {
  title!: string;
  link!: string;
  img!: string;
}
