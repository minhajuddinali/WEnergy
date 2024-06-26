using System;
using System.Collections.Generic;

namespace MajorApi.Models;

public partial class Agent
{
    public string VNo { get; set; } = null!;

    public int? Pid { get; set; }

    public string? Location { get; set; }

    public decimal? Amount { get; set; }

    public int? Month { get; set; }

    public int? Date { get; set; }

    public int? Year { get; set; }

    public bool? Status { get; set; }
}
