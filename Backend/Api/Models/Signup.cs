using System;
using System.Collections.Generic;

namespace MajorApi.Models;

public partial class Signup
{
    public int Sid { get; set; }

    public string Email { get; set; } = null!;

    public string Pwd { get; set; } = null!;
}
