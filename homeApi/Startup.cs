using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;


namespace homeApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(opt =>
       {
           opt.AddPolicy("CorsPolicy",
               c => c.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
       });
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                Console.WriteLine("-------------------");
                Console.WriteLine(System.Diagnostics.Process.GetCurrentProcess().ProcessName);
                // Console.WriteLine(Configuration["MyKey"]);
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("CorsPolicy");

            // app.UseHttpsRedirection();
            app.UseDefaultFiles();
           app.UseStaticFiles();

            Console.WriteLine("----------------Sciezka ---------------");
            Console.WriteLine(Path.Combine(Directory.GetCurrentDirectory()));
        


        app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

           
        }
    }
}
