using PandemicBuddy.Helpers;
using PandemicBuddy.Models;
using PandemicBuddy.Models.Home;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PandemicBuddy.Controllers
{
    public class ProbabilityController : Controller
    {
        // GET: Probability
        public ActionResult Index(HomeViewModel homeVm)
        {
            //validation
            if (homeVm.NumCities < 1)
            {
                homeVm.StatusMessage = "Stop trying to break my code JC! You need a number greater than 0";
                return RedirectToAction("Index", "Home", homeVm);
            }

            var probVM = ProbabilityHelper.CreateProbHomeVM(homeVm.NumCities);

            //check the model
            return View(probVM);
        }
    }
}