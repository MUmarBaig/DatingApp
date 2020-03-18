using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Dtos
{
    public class UserForRegister
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(6,MinimumLength =4,ErrorMessage ="Password Length must between 4 and 8")]
        public string Password { get; set; }
    }
}
