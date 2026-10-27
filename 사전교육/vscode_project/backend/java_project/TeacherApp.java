public class TeacherApp {
    
    public static void main(String[] args) {
        
        // 참조타입 : 값이 아닌 주소값(객체생성)을 담는 그릇
        Teacher tea = new Teacher() ;
        tea.name = "chkim";
        System.out.println(tea.name);
        tea.eating();
        String result = tea.teaching("자바");
        System.out.println(result);
        // 객체 생성
        // new Teacher();
    }
}
