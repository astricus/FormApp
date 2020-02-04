using System;
using System.Collections.Generic;

namespace Forms.Data
{

/// <summary>
/// The main forms <c>Data</c> class.
/// This class is used to store data from all from submitted forms.
/// </summary>
    public static class Data
    {
        /// <value>Property <c>Forms</c> represents the list in which new submited forms will be added.
        /// By default it has some basic forms data to demostrate the functionality
        /// </value>
        public static List<FormData> Forms => allForms;
        static List<FormData> allForms = new List<FormData>()
        {
            new FormData()
            {
                Id = 1,
                Name = "Ivan",
                Email = "ivan@gmail.com",
                City = "Moscow",
                Date = new DateTime(2000,04,20),
                Gender = "Male"
            },
            new FormData()
            {
                Id = 2,
                Name = "Inga",
                Email = "inga@gmail.com",
                City ="Sochi",
                Date = new DateTime(1992,03,18),
                Gender = "Female"
            },
            new FormData()
            {
                Id = 3,
                Name = "Marina",
                Email = "marina@gmail.com",
                City = "St.Petersburg",
                Date = new DateTime(2005,12,03),
                Gender = "Female"
            },
            new FormData()
            {
                Id = 4,
                Name = "Boris",
                Email = "boris@gmail.com",
                City = "Moscow",
                Date = new DateTime(1977,04,30),
                Gender = "Male"
            },
            new FormData()
            {
                Id = 5,
                Name = "Larisa",
                Email = "larisa@gmail.com",
                City = "Moscow",
                Date = new DateTime(2000,04,20),
                Gender = "Female"
            },
            new FormData()
            {
                Id = 6,
                Name = "Maxim",
                Email = "maxim@gmail.com",
                City = "St.Petersburg",
                Date = new DateTime(1998,02,11),
                Gender = "Male"
            }
        };
    }
}