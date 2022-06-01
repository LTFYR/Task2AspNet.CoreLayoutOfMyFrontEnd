using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Task2AspNet.Core.Models;

namespace Task2AspNet.Core.Controllers
{
    public class HomeController:Controller
    {
        public IActionResult Index()
        {
            List<Slider> sliders = new List<Slider>()
            {
                new Slider()
                {
                    title = "Main Title",
                    subtitle = "Sub Title",
                    Image = "https://jssors8.azureedge.net/demos/img/gallery/980x380/023.jpg",
                    paragraph = "This is a paragraph side,This is a paragraph side,This is a paragraph side",
                    Button = "https://www.youtube.com/"
                }
            };
            
            return View(sliders);
        }
    }
}
