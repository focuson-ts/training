package focuson.data.queries;
public class HelloWorldDomainDataQueries{
  public static  String getHelloWorldDomainData(String accountSeq,String applicationRef,String brandRef,String clientRef,String employmentSeq,String vbAccountSeq,String vbAccountType){ 
     return
  "query{getHelloWorldDomainData(" + "accountSeq:" + "\"" + accountSeq + "\""  + "," + "applicationRef:" + "\"" + applicationRef + "\""  + "," + "brandRef:" + "\"" + brandRef + "\""  + "," + "clientRef:" + "\"" + clientRef + "\""  + "," + "employmentSeq:" + "\"" + employmentSeq + "\""  + "," + "vbAccountSeq:" + "\"" + vbAccountSeq + "\""  + "," + "vbAccountType:" + "\"" + vbAccountType + "\"" + "){"+
        "    message"+
        "  }"
  +"}";}
}