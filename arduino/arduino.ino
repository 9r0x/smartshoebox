int tic = 0;

void setup() {
    pinMode(13, OUTPUT);
}

void loop() {
    //int state = analogRead(A0); 
    int state= 0;
    if(tic<10){
    digitalWrite(13, HIGH);
    delay(1000);
    }else{
    digitalWrite(13, LOW);
    delay(1000);}
    tic += 1;
}
