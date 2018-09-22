using System.Web;
using System.Web.Mvc;

namespace Simple_AngularJS_Site_ApiCall
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
