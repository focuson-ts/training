package focuson.data.request.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import focuson.data.Sample;
import focuson.data.queries.HelloWorldDomainDataQueries;
import graphql.GraphQL;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;

  @RestController
  public class HelloWorldDomainDataController {

  @Autowired
  public GraphQL graphQL;
    @GetMapping(value="/helloWorld", produces="application/json")
    public ResponseEntity getHelloWorldDomainData(@RequestParam String accountSeq, @RequestParam String applicationRef, @RequestParam String brandRef, @RequestParam String clientRef, @RequestParam String employmentSeq, @RequestParam String vbAccountSeq, @RequestParam String vbAccountType) throws Exception{
       return Transform.result(graphQL,HelloWorldDomainDataQueries.getHelloWorldDomainData(accountSeq, applicationRef, brandRef, clientRef, employmentSeq, vbAccountSeq, vbAccountType), "getHelloWorldDomainData");
    }

    @GetMapping(value="/helloWorld/query", produces="application/json")
    public String querygetHelloWorldDomainData(@RequestParam String accountSeq, @RequestParam String applicationRef, @RequestParam String brandRef, @RequestParam String clientRef, @RequestParam String employmentSeq, @RequestParam String vbAccountSeq, @RequestParam String vbAccountType) throws Exception{
       return HelloWorldDomainDataQueries.getHelloWorldDomainData(accountSeq, applicationRef, brandRef, clientRef, employmentSeq, vbAccountSeq, vbAccountType);
    }

  @GetMapping(value = "/helloWorld/sample", produces = "application/json")
    public static String sampleHelloWorldDomainData() throws Exception {
      return new ObjectMapper().writeValueAsString( Sample.sampleHelloWorldDomainData0);
    }
  }