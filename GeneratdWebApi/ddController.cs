using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApis.Controllers
{
    [Route("api/[controller]")]
    public class ddController : Controller
    {
         
            //'if (json.hasOwnProperty(key)) {
                firstName
            //''}
          
            //'if (json.hasOwnProperty(key)) {
                lastName
            //''}
          
            //'if (json.hasOwnProperty(key)) {
                age
            //''}
          

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
