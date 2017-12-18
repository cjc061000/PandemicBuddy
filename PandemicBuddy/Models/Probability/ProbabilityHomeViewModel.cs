using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PandemicBuddy.Models.Probability
{
    public class ProbabilityHomeViewModel
    {
        public int NumRows { get; set; }
        public int InfectionRate { get; set; }
        public int TotalDeckSize { get; set; }
        public int TotalKnownCards { get; set; }
        public int KnownCardsLeft { get; set; }

    }
}