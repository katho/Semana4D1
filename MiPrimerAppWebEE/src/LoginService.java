

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LoginService
 */
@WebServlet("/LoginService")
public class LoginService extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginService() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String correo = request.getParameter("correo");
		String password = request.getParameter("password");
		System.out.println("@ "+correo+" : "+password);
		Login login = new Login();
		login.setCorreo(correo);
		login.setPassword("13579");
		if(login.verificarPassword(password))
		{
			response.sendRedirect("success.jsp");
		}
		else
		{
			response.sendRedirect("error.jsp");
		}
		
	}

}
