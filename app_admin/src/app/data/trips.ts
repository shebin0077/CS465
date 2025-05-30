export interface Trip {
    code: string;
    name: string;
    length: string;
    start: string;
    resort: string;
    perPerson: string;
    description: string;
    details: string;
    image: string;
  }
  
  export const trips: Trip[] = [
    {
      code: "GALR210214",
      name: "Gale Reef",
      length: "4 nights 5 days",
      start: "2021-02-14T08:00:00Z",
      resort: "Emerald Bay, 3 stars",
      perPerson: "799.00",
      description: " Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis.Sed consequat libero ut turpis venenatis ut aliquam risus semper.",
      details: " Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales. Etiam nunc lorem ullamcorper vitae laoreet.  ",
      image: "reef3.jpg"
    },
    {
      code: "DAWR210214",
      name: "Dawson’s Reef",
      length: "4 nights 5 days",
      start: "2021-03-14T08:00:00Z",
      resort: "Blue lagoon, 4 stars",
      perPerson: "1199.00",
      description: " Integer magna leo, posuere et dignissim vitae, porttitor at odio. Pellentesque a metus nec magna placerat volutpat. Nunc nisi mi, elementum sit amet aliquet quis, tristique quis nisl. Curabitur odio lacus, blandit ut hendrerit ",
      details: " vulputate, vulputate at est. Morbi aliquet viverra metus eu consectetur. In lorem dui, elementum sit amet convallis ac, tincidunt vel sapien. ",
      image: "reef1.jpg"
    },
    {
      code: "CAWR210214",
      name: "Claire’s REEF",
      length: "4 nights 5 days",
      start: "2021-04-14T08:00:00Z",
      resort: "Coral sands, 5 stars",
      perPerson: "1999.00",
      description: "Donec sed felis risus. Nulla facilisi. Donec a orci tellus, et auctor odio. Fusce ac orci nibh, quis semper arcu. Cras orci neque, euismod et accumsan ac, sagittis molestie lorem. Proin odio sapien, elementum at tempor non. ",
      details: " Vulputate eget libero. In hac habitasse platea dictumst. Integer purus justo, egestas eu consectetur eu, cursus in tortor. Quisque nec nunc ac mi ultrices iaculis. ",
      image: "reef2.jpg"
    }
  ];