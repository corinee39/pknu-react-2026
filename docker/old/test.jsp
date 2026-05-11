<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
    request.setCharacterEncoding("UTF-8");

    String usage = request.getParameter("usage");
    String weight = request.getParameter("weight");
    String countStr = request.getParameter("count");

    int unitPrice = 0;
    int count = 0;
    int totalPrice = 0;

    if (countStr != null && !countStr.trim().equals("")) {
        try {
            count = Integer.parseInt(countStr);
        } catch (NumberFormatException e) {
            count = 0;
        }
    }

    if (usage != null && weight != null) {
        if (usage.equals("선물용") && weight.equals("3kg")) {
            unitPrice = 38000;
        } else if (usage.equals("선물용") && weight.equals("5kg")) {
            unitPrice = 52000;
        } else if (usage.equals("가정용") && weight.equals("3kg")) {
            unitPrice = 30000;
        } else if (usage.equals("가정용") && weight.equals("4kg")) {
            unitPrice = 47000;
        }

        totalPrice = unitPrice * count;
    }
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상품 구성 계산</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 30px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
    }

    caption {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    th, td {
        border: 1px solid #333;
        padding: 12px;
    }

    thead th {
        background-color: #f4b183;
    }

    .col1 {
        background-color: bisque;
    }

    .col2 {
        background-color: rgb(98, 142, 238);
        color: white;
    }

    .col3 {
        background-color: rgb(98, 142, 238);
        color: white;
    }

    .col4 {
        background-color: rgb(106, 203, 216);
    }

    .form-box {
        margin-bottom: 25px;
        padding: 15px;
        border: 1px solid #ccc;
        width: 500px;
        background-color: #fafafa;
    }

    .result {
        margin-top: 20px;
        font-size: 18px;
        font-weight: bold;
    }

    input, select, button {
        padding: 8px;
        margin: 5px;
    }
</style>
</head>
<body>

<h2>JSP 상품 가격 계산 실습</h2>

<div class="form-box">
    <form method="post" action="">
        <label>용도:</label>
        <select name="usage">
            <option value="선물용" <%= "선물용".equals(usage) ? "selected" : "" %>>선물용</option>
            <option value="가정용" <%= "가정용".equals(usage) ? "selected" : "" %>>가정용</option>
        </select>

        <label>중량:</label>
        <select name="weight">
            <option value="3kg" <%= "3kg".equals(weight) ? "selected" : "" %>>3kg</option>
            <option value="5kg" <%= "5kg".equals(weight) ? "selected" : "" %>>5kg</option>
            <option value="4kg" <%= "4kg".equals(weight) ? "selected" : "" %>>4kg</option>
        </select>

        <label>개수:</label>
        <input type="number" name="count" min="1" value="<%= count == 0 ? "" : count %>">

        <button type="submit">계산하기</button>
    </form>
</div>

<table>
    <caption>선물용과 가정용 상품 구성</caption>
    <colgroup>
        <col class="col1" />
        <col class="col2" />
        <col class="col3" />
        <col class="col4" />
        <col style="background-color: #ffe699;" />
    </colgroup>
    <thead>
        <tr>
            <th>용도</th>
            <th>중량</th>
            <th>개수</th>
            <th>1상자 가격</th>
            <th>총 가격</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="2">선물용</th>
            <td>3kg</td>
            <td>1상자</td>
            <td>38,000원</td>
            <td>
                <%= ("선물용".equals(usage) && "3kg".equals(weight) && count > 0) ? String.format("%,d원", 38000 * count) : "-" %>
            </td>
        </tr>
        <tr>
            <td>5kg</td>
            <td>1상자</td>
            <td>52,000원</td>
            <td>
                <%= ("선물용".equals(usage) && "5kg".equals(weight) && count > 0) ? String.format("%,d원", 52000 * count) : "-" %>
            </td>
        </tr>
        <tr>
            <th rowspan="2">가정용</th>
            <td>3kg</td>
            <td>1상자</td>
            <td>30,000원</td>
            <td>
                <%= ("가정용".equals(usage) && "3kg".equals(weight) && count > 0) ? String.format("%,d원", 30000 * count) : "-" %>
            </td>
        </tr>
        <tr>
            <td>4kg</td>
            <td>1상자</td>
            <td>47,000원</td>
            <td>
                <%= ("가정용".equals(usage) && "4kg".equals(weight) && count > 0) ? String.format("%,d원", 47000 * count) : "-" %>
            </td>
        </tr>
    </tbody>
</table>

<% if (unitPrice > 0 && count > 0) { %>
    <div class="result">
        선택 상품: <%= usage %> / <%= weight %><br>
        1상자 가격: <%= String.format("%,d원", unitPrice) %><br>
        입력 개수: <%= count %>상자<br>
        총 가격: <%= String.format("%,d원", totalPrice) %>
    </div>
<% } %>

</body>
</html>