using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restbook.Interface
{
    public interface IAppConfig
    {
        string ApiURL { get; set; }
        string StsServerURL { get; set; }
        string Authority { get; set; }
    }
}
