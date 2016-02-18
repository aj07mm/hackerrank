require_relative 'foo'

describe "foo" do
  it "foo" do
    bar = []
    expect(foo(bar)).to eq(0)
  end
end
