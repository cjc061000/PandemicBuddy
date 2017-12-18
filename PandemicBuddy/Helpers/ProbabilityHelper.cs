using PandemicBuddy.Models.Probability;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PandemicBuddy.Helpers
{
    public static class ProbabilityHelper
    {
        public static ProbabilityHomeViewModel CreateProbHomeVM(int numRows)
        {
            var probVM = new ProbabilityHomeViewModel() { NumRows = numRows };
            return probVM;
        }
    }
}