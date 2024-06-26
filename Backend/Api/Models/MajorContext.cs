using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MajorApi.Models;

namespace MajorApi.Models;

public partial class MajorContext : DbContext
{
    public MajorContext()
    {
    }

    public MajorContext(DbContextOptions<MajorContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Agent> Agents { get; set; }

    public virtual DbSet<Registration> Registrations { get; set; }

    public virtual DbSet<Signup> Signups { get; set; }
    public virtual DbSet<Payments> Payments { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if(!optionsBuilder.IsConfigured)
        {

        }
    }
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
//        => optionsBuilder.UseSqlServer("Data Source=HIN-DH9HYY2-LT\\SQLSERVER;Initial Catalog=Major;Integrated Security=True;Encrypt=True;Trust Server Certificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Agent>(entity =>
        {
            entity.HasKey(e => e.VNo).HasName("PK__Agent__B35D0C376C71D0E1");

            entity.ToTable("Agent");

            entity.Property(e => e.VNo)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("V_No");
            entity.Property(e => e.Amount)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("amount");
            entity.Property(e => e.Date)
                .HasDefaultValueSql("(datepart(day,getdate()))")
                .HasColumnName("date");
            entity.Property(e => e.Location)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("location");
            entity.Property(e => e.Month)
                .HasDefaultValueSql("(datepart(month,getdate()))")
                .HasColumnName("month");
            entity.Property(e => e.Status)
                .HasDefaultValue(false)
                .HasColumnName("status");
            entity.Property(e => e.Year)
                .HasDefaultValueSql("(datepart(year,getdate()))")
                .HasColumnName("year");
        });

        modelBuilder.Entity<Registration>(entity =>
        {
            entity.HasKey(e => e.VNo).HasName("PK__Registra__B35D0C3701D05E1E");

            entity.ToTable("Registration");

            entity.Property(e => e.VNo)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("V_No");
            entity.Property(e => e.City)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("city");
            entity.Property(e => e.Contact)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("contact");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Fname)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("lname");
            entity.Property(e => e.Pwd)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("pwd");
            entity.Property(e => e.VName)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("V_name");
        });

        modelBuilder.Entity<Signup>(entity =>
        {
            entity.HasKey(e => e.Sid).HasName("PK__signup__CA1E5D783634F3AA");

            entity.ToTable("signup");

            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Pwd)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("pwd");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

public DbSet<MajorApi.Models.Billing> Billing { get; set; } = default!;
}
