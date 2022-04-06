package focuson.data;
import java.util.Arrays;
import java.util.Map;
import java.util.List;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.boot.json.JsonParser;
public class Sample{
    private static JsonParser parse = new JacksonJsonParser();
  public static Map sampleHelloWorldDomainData0 =  parse.parseMap(
         "{"+
         "  \"message\": \"Greetings message !\""+
         "}"
  );
}