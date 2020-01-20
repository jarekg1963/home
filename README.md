
C:\programowanie\Home>git init
C:\programowanie\Home>git add README.md

C:\programowanie\Home>git remote add origin https://github.com/jarekg1963/home.git

C:\programowanie\Home>git commit -m "first commit"
C:\programowanie\Home>git push -u origin master


dotnet new api


dotnet publish -o C:\programowanie\home\homeApi\output


self contained - zawiera wszystko łącznie z net core 
dotnet publish -c Release -r win10-x64 --self-contained true -o C:\programowanie\home\homeApi\output


1. Angular url od kropki 

 getTestwhether() {
    return this._http.get('./WeatherForecast');
  }


 2.  W katalogu homeApi zbudowac wwroot i plik idex . 

 3. W startup.cs dodac dwie linie 
            app.UseDefaultFiles();
            app.UseStaticFiles();

3. zmiana siezki w angular.json 

     "options": {
            "outputPath": "../homeApi/wwwroot/",
4. Generowanie produkcji w dotnet 
    dotnet publish -r win-x64 /p:PublishSingleFile=true
   
5. ng build --watch - patrzy na zmiany i wrzuca do katalogu www root 


6. Dos 
    >taskkill /im:nginx.exe /f


test git

-----------------------------------------------------------------
DO PRZEROBIENIA
Youtube 

Setup mvc in asp net core
kudvenkat 

------------------------------------------------------------------
 


