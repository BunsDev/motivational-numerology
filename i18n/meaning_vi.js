const meaning = {
  master: "Số Chủ",

  destiny: {
    title: "Số Phận",
    description:
      "Đây là con số có ảnh hưởng lớn nhất liên quan đến động lực cá nhân của bạn, những gì và ai bạn thích trong môi trường xung quanh, và sự nghiệp mà bạn có khả năng hướng tới nhất.",
    func: "Tháng + Ngày + Năm sinh",
    1: "Đây là con đường của người mạo hiểm, doanh nhân, người tiên phong hoàn toàn độc lập.",
    2: "Đây là con đường của người chăm lo gia đình, đồng đội, người chăm sóc và người sưu tầm.",
    3: 'Đây là con đường của người phiêu lưu, sáng tạo, kiểu "Peter Pan", và/hoặc nhà khoa học kỷ luật "Dapper Dan/Danielle".',
    4: "Đây là con đường của nhân viên/doanh nhân chăm chỉ, tận tâm, chính trực và người bạn trung thành, tốt bụng.",
    5: "Đây là con đường của chiến binh tự do đầy năng lượng, người quảng bá và người du lịch thế giới phong cách, xã giao giỏi.",
    6: "Đây là con đường của công dân tốt, giáo viên kiên nhẫn, người bảo vệ công bằng và công lý, và cha mẹ vũ trụ cho tất cả.",
    7: "Đây là con đường của học giả, người cầu toàn, thiên tài và người giữ bí mật.",
    8: "Đây là con đường của người trụ cột gia đình, thẩm phán, nhà sản xuất/đạo diễn, người điều phối và hành động đẳng cấp.",
    9: 'Đây là con đường của "linh hồn già" quý tộc và dịu dàng, và nhà nhân đạo toàn cầu.',
    11: "Đây là con đường của cố vấn trực giác, người hòa giải và nhân vật công chúng khai sáng.",
    22: "Đây là con đường của nhà khai sáng, người thận trọng, có tổ chức, kiên định và nhà lãnh đạo tầm nhìn truyền cảm hứng.",
  },

  personality: {
    title: "Tính Cách",
    description:
      "Con số này mô tả con người bạn đằng sau hậu trường hoặc trong những khoảnh khắc riêng tư.",
    func: "Ngày sinh",
    1: "Bạn năng động, cương quyết và là một nhà lãnh đạo bẩm sinh, và sự tập trung kiên định của bạn tạo nền tảng cho sự thành công.",
    2: "Bạn là người hòa giải, nuôi dưỡng, quan tâm và tốt bụng, và là một người bạn, bạn đời, nhân viên hoặc ông chủ không thể thiếu.",
    3: "Bạn sáng tạo tuyệt vời, tưởng tượng và giải trí, và là một chủ nhà hoặc chủ tiệc tuyệt vời.",
    4: "Bạn tận tụy, chi tiết và là một công nhân không biết mệt mỏi, và lời nói của bạn quý như vàng.",
    5: "Tính cách thông minh, nhiệt tình và thân thiện của bạn truyền cảm hứng và động viên tất cả những ai biết bạn.",
    6: "Bạn có trách nhiệm, hướng về con người, và yêu thích vẻ đẹp, thiên nhiên và gia đình.",
    7: "Bạn có tư duy phân tích, hướng nghiên cứu, và sự tìm kiếm kiến thức của bạn là rộng lớn và không thể thỏa mãn.",
    8: "Bạn tham vọng, có tổ chức, điều hành chất lượng, và sinh ra để làm lãnh đạo với sự yêu thích nghi thức và công lý.",
    9: "Bạn đa tài, sáng tạo và có năng lực và bạn là chính bạn khi phục vụ người khác.",
    10: "Bạn độc lập, chu đáo và có trách nhiệm với tính cách quản lý; và thái độ lạc quan của bạn tìm thấy điều tích cực trong bất kỳ tình huống nào.",
    11: "Bạn nhạy cảm, thông minh, sáng tạo, truyền cảm hứng, lắng nghe tốt và tự nhiên đảm nhận vai trò 'vai lớn' cho nhiều người.",
    12: "Bạn duyên dáng, cá tính và sáng tạo và sự quyết tâm và tầm nhìn xa của bạn giúp bạn đạt được mục tiêu của mình.",
    13: "Bạn sắc sảo, độc lập, thực tế và thẳng thắn, và sự cống hiến, kiên trì và chịu đựng của bạn với bất kỳ khái niệm, hoàn cảnh hoặc nỗ lực nào là phi thường.",
    14: "Bạn là một kho năng lượng với trí óc sắc bén liên tục đưa ra những ý tưởng mới và các khái niệm và giải pháp sáng tạo, thực tế.",
    15: "Trí óc độc lập, sáng tạo, nghệ thuật/khoa học của bạn khao khát nghiên cứu và phân tích nhiều chủ đề khác nhau và bảo vệ sự công bằng và công lý.",
    16: "Trí óc phân tích, độc đáo của bạn cần thời gian một mình để giải quyết sự khát khao kiến thức không ngừng và vượt qua những ranh giới được chấp nhận trong quá trình đó.",
    17: "Bạn thông minh, tham vọng, can đảm, có đủ năng lượng và sức sống để điều hành một quốc gia, và bạn là hành động đẳng cấp tuyệt vời!",
    18: "Bạn là một kho năng lượng đa tài với trí tuệ, sức mạnh, can đảm và lòng trắc ẩn rộng lớn, và bạn thể hiện tốt nhất khi giúp đỡ những người cần.",
    19: "Tính cách phiêu lưu của bạn làm bạn khao khát sự đa dạng và thay đổi, nhưng khi được truyền cảm hứng, bạn cũng có thể là một nhân viên, ông chủ, bạn đời và bạn tốt kiên trì, tận tâm và đáng kính.",
    20: "Tính cách ấm áp, hữu ích và thận trọng của bạn được đánh giá cao trong bất kỳ môi trường làm việc nào và bạn sẽ thu thập và giữ lại nhiều bạn bè suốt đời.",
    21: "Bạn có tính cách tốt, lạc quan, truyền cảm hứng và hào phóng. Bạn bị cuốn hút bởi tất cả những thứ đẹp đẽ, chất lượng và giải trí, và sự sáng tạo của bạn có thể đưa bạn vào tâm điểm.",
    22: "Bạn thể hiện kỷ luật phi thường, năng lượng, logic và sự nhạy cảm và bạn có tâm trí của một nhà lãnh đạo tầm nhìn xuất sắc, khai sáng và doanh nghiệp.",
    23: "Bạn có tinh thần nuôi dưỡng, vui vẻ, hướng tới tự do và trí óc nhanh nhạy, nguyên bản và trí tuệ của bạn liên tục đưa ra những ý tưởng và kế hoạch thông minh và độc đáo.",
    24: "Bạn duyên dáng, hòa đồng, hóm hỉnh, và nhiều hơn là một người yêu hơn là một chiến binh. Tính cách chu đáo và hào phóng của bạn luôn sẵn sàng đi 'một dặm thêm nữa', và bạn là một người bạn và bạn đời đáng kính.",
    25: "Bạn hóm hỉnh và khôn ngoan, và bạn tò mò về mọi thứ. Kho tàng trí tuệ bẩm sinh và bản chất nhân hậu, hào phóng của bạn tạo nên ý thức trách nhiệm bẩm sinh đối với nhân loại, nói chung.",
    26: "Tính cách của bạn giống như một vị tướng năm sao - kiên định và chỉ huy với sự yêu thích nghi thức. 'Giác quan thứ sáu' của bạn cho phép bạn ngay lập tức nhận biết đúng sai và tạo ra một ví dụ xuất sắc cho người khác.",
    27: "Giống như Vua Cole già, bạn là một 'linh hồn già', và bạn sở hữu kiến thức bẩm sinh rộng lớn và sự nhạy bén phi thường. Du lịch và thay đổi là điều cần thiết cho sự an lành của bạn.",
    28: "Bạn duyên dáng, độc lập, một nhà ngoại giao bẩm sinh, và tính cách của bạn là của một người thành công và lãnh đạo. Những lý tưởng và nguyên tắc cao của bạn cho phép bạn đạt được mục tiêu của mình.",
    29: "Bản chất nhẹ nhàng, nhạy cảm của bạn được bổ sung bởi sự kết hợp giữa năng lượng và sự lôi cuốn thu hút mọi người đến với bạn như một nam châm. Bạn sở hữu 'giác quan thứ sáu' cho phép bạn giúp đỡ nhiều người tìm đến vai to của bạn.",
    30: "Bạn thông minh, sáng tạo, vui vẻ, và được ban phước với khiếu hài hước tuyệt vời, và đặc biệt tài năng khi tham gia vào bất kỳ nỗ lực sáng tạo nào. Tính cách xã hội khéo léo của bạn giúp bạn nổi bật giữa đám đông.",
    31: "Bạn sáng tạo, đổi mới và sở hữu một lượng kiến thức rộng lớn. Chu đáo, đáng tin cậy và đúng giờ, bạn cũng là một người có thói quen và có thể là một người bạn đời và bạn tốt tận tâm.",
  },

  attitude: {
    title: "Thái Độ",
    description:
      "Con số này có ảnh hưởng mạnh mẽ nhất trong 30-35 năm đầu đời của bạn và đại diện cho cách và lý do bạn phản ứng với hoàn cảnh khi còn trẻ.",
    func: "Tháng + Ngày sinh",
    1: "Bạn sinh ra với ý chí mạnh mẽ và tính cách độc lập. Bạn thích tự mình lựa chọn và rất cứng đầu khi bị ép theo hướng khác.",
    2: "Bạn sinh ra để trở thành một đứa trẻ và thanh niên ngọt ngào, dịu dàng, tử tế và quan tâm. Bạn yêu thích việc nuôi dưỡng và được nuôi dưỡng, và rất nhạy cảm và tinh tế.",
    3: "Bạn sinh ra có phần nhút nhát nhưng một khi bạn học nói, bạn có thể trở thành một người giải trí tự nhiên, ưa phiêu lưu và cuốn hút.",
    4: "Bạn sinh ra với tính khí nhạy cảm và cứng đầu, nhưng có thể rất ngọt ngào và tận tâm khi nhận được lời khen ngợi và khuyến khích.",
    5: "Bạn sinh ra với năng lượng dồi dào! Bạn cần sự kích thích tinh thần và thể chất liên tục và bạn dễ nổi nóng khi mất kiên nhẫn.",
    6: "Bạn sinh ra có trách nhiệm, chu đáo, cân nhắc, tử tế và quan tâm đến mọi người, đặc biệt là cha mẹ, anh chị em, bạn bè và tất cả mọi thứ của thiên nhiên.",
    7: "Bạn sinh ra với trí tuệ tuyệt vời cần thời gian riêng để đắm mình trong việc tìm kiếm kiến thức và sở thích, điều thú vị rộng lớn.",
    8: "Bạn sinh ra để làm gương mẫu trong mọi việc bạn làm; điều này xuất phát từ nhu cầu cảm thấy kiểm soát. Bạn là 'học sinh giỏi' khi được khuyến khích.",
    9: "Bạn sinh ra với sự nhạy cảm giống người lớn từ rất sớm. Lời khen ngợi và khuyến khích từ những người gần gũi nhất giúp bạn đạt được thành tựu.",
    11: "Bạn sinh ra rất nhạy cảm; rất trực giác, cao quý và yêu âm nhạc; ngọt ngào, dịu dàng và trí tuệ khi được truyền cảm hứng, bạn có tố chất ngôi sao.",
    22: "Bạn sinh ra với tính cách cứng đầu nhưng với sự khuyến khích bạn có thể trở nên rất có mục đích, khởi nghiệp, cảm hứng và sáng tạo.",
  },

  character: {
    title: "Tính Cách",
    description:
      "Con số này chủ yếu đại diện cho các phẩm chất công khai và xã hội của bạn, nhưng bạn cũng sẽ thể hiện nhiều điều tương tự trong các mối quan hệ cá nhân.",
    func: "Chữ cái trong tên",
    1: "Sở hữu một trí tuệ độc đáo và sáng tạo, với sự tập trung kiên định vào mục tiêu của mình làm bạn đủ phẩm chất để trở thành một nhà lãnh đạo.",
    2: "Tự nhiên ngoại giao, tính tình tốt và là người hòa giải, hình ảnh công khai của bạn giống như một đại sứ của mọi người.",
    3: "Khả năng lạc quan, nhiệt huyết và sáng tạo của bạn cho phép bạn thu hút, truyền cảm hứng và giải trí cho người khác trong bất kỳ công việc nào bạn chọn.",
    4: "Hình ảnh công khai có trách nhiệm, có tổ chức, có hệ thống và đáng tin cậy của bạn làm cho bạn trở thành một công nhân được săn đón hoặc Chủ tịch Hội đồng quản trị.",
    5: "Bản tính quyến rũ, khéo léo, linh hoạt và có phong cách của bạn làm bạn trở thành người dẫn đầu xu hướng có thể thu hút và truyền cảm hứng cho nhiều người khi tập trung vào một sứ mệnh.",
    6: 'Là một nhà nhân đạo bẩm sinh, người luôn hướng về cộng đồng, là bậc cha mẹ/thầy giáo/người hoàn hảo luôn "đi thêm một dặm nữa", bạn là một nhà lãnh đạo ủy ban hoặc phong trào xuất sắc.',
    7: "Là một thiên tài triết học tiên phong, luôn tìm kiếm kiến thức, bạn không tìm kiếm ánh đèn sân khấu nhưng là một giáo viên, giáo sư và chuyên gia nghề nghiệp xuất sắc.",
    8: "Hình ảnh của bạn như một người giảng dạy xuất sắc, thẩm phán/bồi thẩm, nhà sản xuất/đạo diễn có giác quan thứ sáu cho phép bạn dễ dàng phân biệt đúng sai trong bất kỳ điều gì.",
    9: 'Là một nhà hiền triết bẩm sinh, quý tộc, nhà nhân đạo dễ chịu về mặt xã hội, bạn hướng về cộng đồng có thể hưởng lợi nhiều nhất từ sứ mệnh "phục vụ vô vị lợi" của bạn.',
    11: "Là một cố vấn hoặc nhà lãnh đạo cộng đồng đồng cảm, khai sáng và hiểu biết, bạn thuộc về ánh đèn sân khấu; số 11 liên quan đến sự nổi tiếng và sự chiếu sáng.",
    22: "Là một người xây dựng đế chế cao cả và nhà tổ chức hướng về tâm linh, bạn phù hợp nhất để giúp các phong trào và công ty công cộng đánh giá cao phong cách tận tâm, thẳng thắn của bạn.",
  },

  soul: {
    title: "Khát Vọng Linh Hồn",
    description:
      "Ảnh hưởng này trình bày một góc nhìn về bản thân trực giác và tâm hồn của bạn.",
    func: "Nguyên âm trong tên",
    1: "Khát vọng của Linh hồn bạn là trở nên sáng tạo, đổi mới và dẫn dắt quần chúng đến một lĩnh vực cao hơn của ý thức và sự hiểu biết, tạo ra lòng từ bi cho tất cả mọi người.",
    2: "Khát vọng của Linh hồn bạn là mang lại hòa bình, hòa hợp và sự tinh tế để tạo ra những phẩm chất nuôi dưỡng và yêu thương lớn hơn trong những người bạn biết và an ủi.",
    3: "Khát vọng của Linh hồn bạn là mang lại NIỀM VUI, nhiệt huyết, đam mê và khơi dậy trí tưởng tượng của người khác bằng sự sáng tạo và những ý tưởng và sở thích ấm áp.",
    4: "Khát vọng của Linh hồn bạn là mang lại sự trung thực, đáng tin cậy, thực tế và quyết tâm để giúp đỡ người khác và bản thân đạt được những kết quả truyền cảm hứng và khai sáng.",
    5: "Khát vọng của Linh hồn bạn là sử dụng năng lượng dồi dào, tư duy cởi mở và các thuộc tính tinh thần tiến bộ của bạn để đóng góp cao cả cho nhân loại.",
    6: "Khát vọng của Linh hồn bạn là trở nên có trách nhiệm, tận tâm, chu đáo và tử tế với mọi người, và dạy dỗ, tư vấn và an ủi để duy trì những phẩm chất đó cho bản thân.",
    7: "Khát vọng của Linh hồn bạn là sử dụng tính phân tích, định hướng nghiên cứu và bản chất hay thắc mắc của bạn để khám phá hoặc tiết lộ điều gì đó ý nghĩa sẽ giúp ích cho nhiều người, thay vì chỉ một vài người.",
    8: "Khát vọng của Linh hồn bạn là mang lại chất lượng, sự nhất quán và cảm hứng cho người khác và thể hiện sự tinh tế tự nhiên và chất lượng trong bạn với tất cả những người tiếp xúc.",
    9: "Khát vọng của Linh hồn bạn là sử dụng các phẩm chất quý tộc, dịu dàng và nhân đạo của bạn với sự nhất quán, điều này sẽ giúp tạo ra sân khấu để người khác noi theo.",
    11: "Khát vọng của Linh hồn bạn là mang lại hòa bình, hòa hợp, vẻ đẹp và tính trung thực như những ví dụ về phẩm chất tinh thần cao nhất của bạn để mọi người đánh giá cao và hy vọng bắt chước.",
    22: "Khát vọng của Linh hồn bạn là trở thành một 'Nhà Kiến Tạo Bậc Thầy', người có mong muốn tâm hồn là giúp đỡ và phục vụ nhân loại và trái đất với tinh thần cao cả và lòng nhân đạo.",
  },

  agenda: {
    title: "Nghị Trình Ẩn",
    description:
      "Rung động này mang lại những mong muốn bẩm sinh (ẩn giấu) của bạn.",
    func: "Phụ âm trong tên",
    1: "Nghị trình này kích động mong muốn bẩm sinh được độc lập, lãnh đạo, đổi mới và tạo ra các khái niệm và những điều độc đáo và khác biệt.",
    2: "Nghị trình này mang lại mong muốn bẩm sinh sống cuộc sống trong hòa bình và hòa hợp, tạo ra một bản chất không hung hăng, hợp tác và hòa nhã cho tất cả.",
    3: "Nghị trình này truyền cảm hứng cho mong muốn bẩm sinh trở nên sáng tạo hơn, giải trí và du lịch khắp thế giới, mang lại niềm vui và hạnh phúc lớn hơn cho tất cả những ai tương tác với tính cách nâng cao của bạn.",
    4: "Nghị trình này đòi hỏi logic, tổ chức và sự kiên trì để thể hiện các nhu cầu bẩm sinh, mong muốn và sự an tâm mà bạn giữ và bảo tồn.",
    5: "Nghị trình này truyền cảm hứng cho mong muốn bẩm sinh về tự do hơn bất cứ điều gì khác, cùng với việc có khả năng du lịch và sống không bị hạn chế nhiều nhất có thể.",
    6: "Nghị trình này có một trọng tâm nhân đạo mạnh mẽ - giúp đỡ và chăm sóc mọi thứ trên trái đất - con người, động vật và trái đất xinh đẹp.",
    7: "Nghị trình này kích thích khát vọng bẩm sinh về việc tiếp thu kiến thức liên quan đến khoa học (huyền bí hoặc khác), triết học, nghệ thuật và tâm linh.",
    8: "Nghị trình này thể hiện mong muốn bẩm sinh về quyền lực, danh tiếng và tích lũy số tiền lớn, hoặc trở thành một giáo viên khai sáng cho quần chúng.",
    9: "Nghị trình này ảnh hưởng đến mong muốn bẩm sinh đạt được những điều tốt nhất từ quần áo và xe hơi đến giải trí, hoặc một nhu cầu phi thường để sống một cuộc sống hoàn toàn nhân đạo mà không nghĩ đến bản thân.",
    11: "Nghị trình này kích động nhu cầu bẩm sinh để làm mục sư, cố vấn, hoặc tham gia vào nghệ thuật chữa bệnh theo cách giúp đỡ nhiều người, hoặc trở nên nổi tiếng nhờ các dịch vụ nhân đạo của bạn.",
    22: "Nghị trình này truyền cảm hứng cho mong muốn bẩm sinh làm điều gì đó lớn lao cho nhân loại. Con số Chủ này cho bạn khả năng leo lên những ngọn núi cao nhất hoặc phát minh ra một sản phẩm hoặc triết lý xuất sắc.",
  },

  purpose: {
    title: "Mục Đích Thiêng Liêng",
    description:
      "Đây là rung động của số hiệu biểu diễn cuối cùng của bạn. Đây là điều mà Bản Ngã Tâm Hồn của bạn đã chọn để đạt được trong những năm cuối đời.",
    func: "Số Phận + Tính Cách",
    1: "Mục Đích Thiêng Liêng của bạn là để lại một di sản của một điều gì đó bạn tiên phong - một khái niệm, một sản phẩm, một nền tảng.",
    2: "Mục Đích Thiêng Liêng của bạn là mang lại hòa bình, sự thoải mái và hòa hợp cho đồng loại của bạn.",
    3: "Mục Đích Thiêng Liêng của bạn là sử dụng tài năng sáng tạo và trí tưởng tượng của mình để tạo ra một sản phẩm, một ý tưởng, một cuốn sách, một bộ phim hoặc một hình thức biểu đạt nghệ thuật khác.",
    4: "Mục Đích Thiêng Liêng của bạn là xây dựng một nền tảng ổn định giúp đỡ mọi người và có trọng tâm nhân đạo.",
    5: "Mục Đích Thiêng Liêng của bạn là giúp mang lại những thay đổi tiến bộ làm cho cuộc sống tốt đẹp hơn cho các thế hệ tương lai.",
    6: "Mục Đích Thiêng Liêng của bạn là giảng dạy, khơi gợi và giúp đỡ các nguyên nhân nhân đạo, chăm sóc gia đình và nhà cửa, và có trách nhiệm xã hội.",
    7: "Mục Đích Thiêng Liêng của bạn là truyền đạt kiến thức rộng lớn bạn đã thu thập được trong một lĩnh vực khoa học, nghệ thuật, triết học hoặc tôn giáo thông qua một nỗ lực sáng tạo.",
    8: "Mục Đích Thiêng Liêng của bạn là lãnh đạo, chỉ đạo, khởi xướng và khơi gợi như một nhà lãnh đạo hoặc điều hành, và giúp đỡ những người kém may mắn thông qua hoạt động từ thiện.",
    9: "Mục Đích Thiêng Liêng của bạn là trở thành một nhà nhân đạo toàn cầu - một người cha mẹ tốt, một người bạn đời tốt và một công dân tốt; một nhà từ thiện, một bộ trưởng, một chính trị gia - làm việc vì sự phát triển của nhân loại.",
    11: "Mục Đích Thiêng Liêng của bạn là giúp đỡ mọi người trên các mặt tâm linh, tâm lý và tinh thần. Để nâng cao người khác với những lời khôn ngoan; để lắng nghe, tư vấn và giúp đỡ người khác tiến lên trên hành trình cuộc đời của họ.",
    22: "Mục Đích Thiêng Liêng của bạn là tổ chức và xây dựng; duy trì một doanh nghiệp cung cấp công việc cho người khác và giúp đỡ mọi người thông qua dịch vụ cho cộng đồng và có thể là trên toàn thế giới.",
  },
};
