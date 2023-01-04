import Component from '@glimmer/component';

export default class StructuralPagesServicesPageComponent extends Component {
  //routes for link-tos
  welcomeRoute = 'index';
  servicesRoute = 'services';
  visitRoute = 'visit';
  aboutRoute = 'about';
  //imageMasonryBlock images - only using on large and wide screens so no need for small and medium attributes
  imageOne =
    'https://imagedelivery.net/uSmqQyv4nG5_KuZ4KHY0Ew/791d5acd-13ba-4c83-a665-9de21dbeae00/850x250';
  imageOneFallback =
    'https://imagedelivery.net/uSmqQyv4nG5_KuZ4KHY0Ew/791d5acd-13ba-4c83-a665-9de21dbeae00/850x250';
  imageOneAltLabel = 'A Chiropractor table.';
  imageTwo =
    'https://imagedelivery.net/uSmqQyv4nG5_KuZ4KHY0Ew/d829aa1a-99dc-4119-7045-9c604f2b5c00/400x600';
  imageTwoFallback =
    'https://imagedelivery.net/uSmqQyv4nG5_KuZ4KHY0Ew/d829aa1a-99dc-4119-7045-9c604f2b5c00/400x600';
  imageTwoAltLabel = 'Front panel of ultrasound machine';
  imageThree =
    'https://imagedelivery.net/uSmqQyv4nG5_KuZ4KHY0Ew/b57c6e86-1214-4d05-510c-40596a60b500/400x300';
  imageThreeFallback =
    'https://imagedelivery.net/uSmqQyv4nG5_KuZ4KHY0Ew/b57c6e86-1214-4d05-510c-40596a60b500/400x300';
  imageThreeAltLabel = 'Doctor Curtis is taping the knee of a patient';
  imageFour =
    'https://imagedelivery.net/uSmqQyv4nG5_KuZ4KHY0Ew/2139456c-149b-4abe-5115-c1f647f9b000/400x300';
  imageFourFallback =
    'https://imagedelivery.net/uSmqQyv4nG5_KuZ4KHY0Ew/2139456c-149b-4abe-5115-c1f647f9b000/400x300';
  imageFourAltLabel =
    'Doctor Curtis is performing another procedure to a patient who is laying flat on a chiropractor table.';
}
