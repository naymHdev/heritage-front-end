import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      quote:
        "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for.",
      name: "Tony Stark",
      title: "Marketing manager, XYZ",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 4,
    },
    {
      id: 2,
      quote:
        "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for.",
      name: "Tony Stark",
      title: "Marketing manager, XYZ",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      rating: 5,
    },
    {
      id: 1,
      quote:
        "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for.",
      name: "Tony Stark",
      title: "Marketing manager, XYZ",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 4,
    },
    {
      id: 2,
      quote:
        "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for.",
      name: "Tony Stark",
      title: "Marketing manager, XYZ",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      rating: 5,
    },
    {
      id: 1,
      quote:
        "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for.",
      name: "Tony Stark",
      title: "Marketing manager, XYZ",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 4,
    },
    {
      id: 2,
      quote:
        "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for.",
      name: "Tony Stark",
      title: "Marketing manager, XYZ",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      rating: 5,
    },
  ];

  return (
    <div className=" px-4 md:px-6 lg:px-10 mt-10">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="bg-blue-50 py-16 px-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-gray-300" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-4">{testimonial.quote}</p>
              <div className="flex flex-col justify-center items-center">
                <div className=" flex items-center justify-center mb-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
