using PandemicBuddy.Models;
using PandemicBuddy.Models.Home;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PandemicBuddy.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(HomeViewModel vm = null)
        {
            var viewModel = new HomeViewModel()
            {
                NumCities = 1,
                StatusMessage = string.Empty
            };
            if (vm != null)
            {
                viewModel = vm;
            }

            return View(viewModel);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}