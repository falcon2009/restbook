using Restbook.Interface;

namespace Restbook.Model
{
    public class AppConfig : IAppConfig
    {
        public string ApiURL { get; set; }
        public string StsServerURL { get; set; }
        public string Authority { get; set; }
    }
}
