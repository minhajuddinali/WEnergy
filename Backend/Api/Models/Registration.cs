using System;
using System.Collections.Generic;

namespace MajorApi.Models;

public partial class Registration
{
    public string VNo { get; set; } = null!;

    public string? Fname { get; set; }

    public string? Lname { get; set; }

    public string? Contact { get; set; }

    public string? Email { get; set; }

    public string? VName { get; set; }

    public string? City { get; set; }

    public string? Pwd { get; set; }
}
